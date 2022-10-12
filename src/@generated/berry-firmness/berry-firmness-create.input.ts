import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateNestedManyWithoutBerry_firmnessInput } from '../berries/berries-create-nested-many-without-berry-firmness.input';
import { berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput } from '../berry-firmness-names/berry-firmness-names-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berriesCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berries?: berriesCreateNestedManyWithoutBerry_firmnessInput;

    @Field(() => berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesCreateNestedManyWithoutBerry_firmnessInput;
}
