class Device():

    def __init__(self, energy_cost, time_of_use):
        self.energy_cost = energy_cost
        self.time_of_use = time_of_use

    def to_tuple(self):
        return (self.energy_cost, self.time_of_use)

class DeviceList():

    def __init__(self):
        self.elements = []


    def append(self, items):
        if isinstance(items, Device):
            self.elements.append(items)
            return

        if not isinstance(items, Device) and isinstance(items, list):
            for element in items:
                if not isinstance(element, Device):
                    raise TypeError("Element: {} is type: {} have to be type Device".format(
                        element,
                        type(element)
                    ))

            self.elements.extend(items)

        raise TypeError("Had type: {} expected Device".format(type(items)))

    def pop(self):
        return self.elements.pop().to_tuple()

    def __len__(self):
        return len(self.elements)