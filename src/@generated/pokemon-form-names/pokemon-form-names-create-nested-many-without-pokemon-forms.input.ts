import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesCreateWithoutPokemon_formsInput } from './pokemon-form-names-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput } from './pokemon-form-names-create-or-connect-without-pokemon-forms.input';
import { pokemon_form_namesWhereUniqueInput } from './pokemon-form-names-where-unique.input';

@InputType()
export class pokemon_form_namesCreateNestedManyWithoutPokemon_formsInput {

    @Field(() => [pokemon_form_namesCreateWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateWithoutPokemon_formsInput)
    create?: Array<pokemon_form_namesCreateWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: Array<pokemon_form_namesCreateOrConnectWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    connect?: Array<pokemon_form_namesWhereUniqueInput>;
}
