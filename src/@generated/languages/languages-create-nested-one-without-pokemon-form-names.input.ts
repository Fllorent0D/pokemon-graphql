import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutPokemon_form_namesInput } from './languages-create-without-pokemon-form-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutPokemon_form_namesInput } from './languages-create-or-connect-without-pokemon-form-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutPokemon_form_namesInput {

    @Field(() => languagesCreateWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutPokemon_form_namesInput)
    create?: languagesCreateWithoutPokemon_form_namesInput;

    @Field(() => languagesCreateOrConnectWithoutPokemon_form_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutPokemon_form_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutPokemon_form_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
