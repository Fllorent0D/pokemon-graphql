import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateNestedManyWithoutBerry_firmnessInput } from '../berries/berries-create-nested-many-without-berry-firmness.input';

@InputType()
export class berry_firmnessCreateWithoutBerry_firmness_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => berriesCreateNestedManyWithoutBerry_firmnessInput, {nullable:true})
    berries?: berriesCreateNestedManyWithoutBerry_firmnessInput;
}
