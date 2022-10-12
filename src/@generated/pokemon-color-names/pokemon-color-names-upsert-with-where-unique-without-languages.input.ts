import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesWhereUniqueInput } from './pokemon-color-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesUpdateWithoutLanguagesInput } from './pokemon-color-names-update-without-languages.input';
import { pokemon_color_namesCreateWithoutLanguagesInput } from './pokemon-color-names-create-without-languages.input';

@InputType()
export class pokemon_color_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;

    @Field(() => pokemon_color_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateWithoutLanguagesInput)
    update!: pokemon_color_namesUpdateWithoutLanguagesInput;

    @Field(() => pokemon_color_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_color_namesCreateWithoutLanguagesInput)
    create!: pokemon_color_namesCreateWithoutLanguagesInput;
}
