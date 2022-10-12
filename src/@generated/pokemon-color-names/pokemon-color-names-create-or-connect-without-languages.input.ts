import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateWithoutLanguagesInput } from './pokemon-color-names-create-without-languages.input';

@InputType()
export class pokemon_color_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;

    @Field(() => pokemon_color_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_color_namesCreateWithoutLanguagesInput)
    create!: pokemon_color_namesCreateWithoutLanguagesInput;
}
