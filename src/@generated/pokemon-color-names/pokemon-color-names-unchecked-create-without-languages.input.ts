import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_color_namesUncheckedCreateWithoutLanguagesInput {

    @Field(() => Int, {nullable:false})
    pokemon_color_id!: number;

    @Field(() => String, {nullable:false})
    name!: string;
}
