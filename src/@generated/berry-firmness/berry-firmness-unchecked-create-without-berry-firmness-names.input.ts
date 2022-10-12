import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput } from '../berries/berries-unchecked-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessUncheckedCreateWithoutBerry_firmness_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berries?: berriesUncheckedCreateNestedManyWithoutBerry_firmnessInput;
}
