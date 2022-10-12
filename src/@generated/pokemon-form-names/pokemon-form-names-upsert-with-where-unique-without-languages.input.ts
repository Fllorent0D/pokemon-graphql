import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesUpdateWithoutLanguagesInput } from './pokemon-form-names-update-without-languages.input';
import { pokemon_form_namesCreateWithoutLanguagesInput } from './pokemon-form-names-create-without-languages.input';

@InputType()
export class pokemon_form_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;

    @Field(() => pokemon_form_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateWithoutLanguagesInput)
    update!: pokemon_form_namesUpdateWithoutLanguagesInput;

    @Field(() => pokemon_form_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_form_namesCreateWithoutLanguagesInput)
    create!: pokemon_form_namesCreateWithoutLanguagesInput;
}
