import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutPokemon_form_namesInput } from './languages-create-without-pokemon-form-names.input';

@InputType()
export class languagesCreateOrConnectWithoutPokemon_form_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutPokemon_form_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutPokemon_form_namesInput)
    create!: languagesCreateWithoutPokemon_form_namesInput;
}
