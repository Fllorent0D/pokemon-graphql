import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class encounter_condition_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    encounter_condition_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
