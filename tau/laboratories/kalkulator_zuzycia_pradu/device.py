class Device():

    def __init__(self, energy_cost, time_of_use):
        self.energy_cost = energy_cost
        self.time_of_use = time_of_use

    def to_tuple(self):
        return (self.energy_cost, self.time_of_use)

    def __str__(self):
        return "Device: {} h, {} kW".format(self.time_of_use, self.energy_cost / 1000.0)



class DeviceList():

    def __init__(self):
        self._elements = []

    def energy_cost(self, energy_cost):
        result = 0
        for element in self._elements:
            element_energy_cost = energy_cost * element.time_of_use * (element.energy_cost / 1000.0)
            result += round(element_energy_cost, 4)
        return round(result, 4)


    @property
    def elements(self):
        return self._elements

    def append(self, items):
        if isinstance(items, Device):
            self._elements.append(items)
        elif isinstance(items, list):
            for element in items:
                if not isinstance(element, Device):
                    raise TypeError("Element: {} is type: {} have to be type Device".format(
                        element,
                        type(element)
                    ))
            self._elements.extend(items)
        else:
            raise TypeError("Had type: {} expected Device".format(type(items)))

    def pop(self):
        return self._elements.pop().to_tuple()

    def __len__(self):
        return len(self._elements)