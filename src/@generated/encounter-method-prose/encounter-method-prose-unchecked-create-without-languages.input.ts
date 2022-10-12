import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class encounter_method_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    encounter_method_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
