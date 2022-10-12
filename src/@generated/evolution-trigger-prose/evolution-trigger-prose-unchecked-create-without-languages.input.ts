import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class evolution_trigger_proseUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
