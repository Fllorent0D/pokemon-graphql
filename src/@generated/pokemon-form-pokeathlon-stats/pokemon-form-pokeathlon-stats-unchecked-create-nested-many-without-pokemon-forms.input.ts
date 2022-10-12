import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-create-without-pokemon-forms.input';
import { Type } from 'class-transformer';
import { pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput } from './pokemon-form-pokeathlon-stats-create-or-connect-without-pokemon-forms.input';
import { pokemon_form_pokeathlon_statsWhereUniqueInput } from './pokemon-form-pokeathlon-stats-where-unique.input';

@InputType()
export class pokemon_form_pokeathlon_statsUncheckedCreateNestedManyWithoutPokemon_formsInput {

    @Field(() => [pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput)
    create?: Array<pokemon_form_pokeathlon_statsCreateWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput)
    connectOrCreate?: Array<pokemon_form_pokeathlon_statsCreateOrConnectWithoutPokemon_formsInput>;

    @Field(() => [pokemon_form_pokeathlon_statsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_form_pokeathlon_statsWhereUniqueInput)
    connect?: Array<pokemon_form_pokeathlon_statsWhereUniqueInput>;
}
