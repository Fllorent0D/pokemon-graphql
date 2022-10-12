import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput } from '../berries/berries-unchecked-create-nested-many-without-berry-firmness.input';
import { berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput } from '../berry-firmness-names/berry-firmness-names-unchecked-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berries?: berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput;

    @Field(() => berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berry_firmness_names?: berry_firmness_namesUncheckedCreateNestedManyWithoutBerry_firmnessInput;
}
