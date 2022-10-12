import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { berriesUpdateManyWithoutBerry_firmnessNestedInput } from '../berries/berries-update-many-without-berry-firmness-nested.input';
import { berry_firmness_namesUpdateManyWithoutBerry_firmnessNestedInput } from '../berry-firmness-names/berry-firmness-names-update-many-without-berry-firmness-nested.input';

@InputType()
export class berry_firmnessUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => berriesUpdateManyWithoutBerry_firmnessNestedInput, {nullable:true})
    berries?: berriesUpdateManyWithoutBerry_firmnessNestedInput;

    @Field(() => berry_firmness_namesUpdateManyWithoutBerry_firmnessNestedInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUpdateManyWithoutBerry_firmnessNestedInput;
}
