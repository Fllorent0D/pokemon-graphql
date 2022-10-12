import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_habitat_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokemon_habitat_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
