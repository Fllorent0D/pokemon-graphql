import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_form_namesInput } from './languages-create-without-pokemon-form-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_form_namesInput } from './languages-create-or-connect-without-pokemon-form-names.input';
import { languagesUpsertWithoutPokemon_form_namesInput } from './languages-upsert-without-pokemon-form-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutPokemon_form_namesInput } from './languages-update-without-pokemon-form-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutPokemon_form_namesNestedInput {

    @Field(() => languagesCreateWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_form_namesInput)
    create?: languagesCreateWithoutPokemon_form_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_form_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_form_namesInput;

    @Field(() => languagesUpsertWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutPokemon_form_namesInput)
    upsert?: languagesUpsertWithoutPokemon_form_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutPokemon_form_namesInput)
    update?: languagesUpdateWithoutPokemon_form_namesInput;
}
