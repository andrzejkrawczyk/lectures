import pytest
from device import Device
from device import DeviceList


single_device = Device(2400, 0.5)
multiple_devices = [
    Device(2400, 0.5),
    Device(1000, 1),
    Device(500, 0.1),
    Device(3000, 0.3)
]

def create_device_list(devices):
    dl = DeviceList()
    dl.append(devices)

    return dl

class TestKalkulatorZuzyciaPradu():
    def test_given_empty_device_list_when_added_new_device_then_have_to_contain_that_device(self):
        dl = create_device_list(single_device)

        assert len(dl) == 1
        assert dl.pop() == (2400, 0.5)


    def test_given_empty_device_list_when_added_new_multiple_devices_then_have_to_contains_those_device(self):
        dl = create_device_list(multiple_devices)

        assert len(dl) == 4
        assert dl.elements == multiple_devices

    def test_device_list_container_when_adding_wrong_type_then_type_error_is_raised(self):
        dl = DeviceList()

        with pytest.raises(TypeError):
            dl.append(5)

        with pytest.raises(TypeError):
            dl.append([1,2])

    def test_device_list_container_containing_one_device_with_2_4_kWh_for_0_5_hours_when_calculating_energy_price_then_returns_time_multiplicated_by_energy_use_multiplicated_by_energy_bost(self):
        expected_result = 0.6
        dl = create_device_list(single_device)

        result = dl.energy_cost(0.5)

        assert result == expected_result

    def test_device_list_container_containing_devices_when_calculating_energy_price_then_should_return_time_of_devices_multiplicated_by_energy_use_multiplicated_by_delivered_energy_cost(self):
        expected_result = 2.0475
        energy_cost = 0.65
        dl = create_device_list(multiple_devices)


        result = dl.energy_cost(energy_cost)

        assert result == expected_result

    def test_empty_list_device_container_when_calculating_energy_price_then_should_return_0(self):
        dl = DeviceList()

        result = dl.energy_cost(10)

        assert result == 0
