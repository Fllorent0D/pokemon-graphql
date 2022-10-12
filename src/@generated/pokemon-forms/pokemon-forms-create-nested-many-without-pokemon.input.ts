import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsCreateWithoutPokemonInput } from './pokemon-forms-create-without-pokemon.input';
import { Type } from 'class-transformer';
import { pokemon_formsCreateOrConnectWithoutPokemonInput } from './pokemon-forms-create-or-connect-without-pokemon.input';
import { pokemon_formsWhereUniqueInput } from './pokemon-forms-where-unique.input';

@InputType()
export class pokemon_formsCreateNestedManyWithoutPokemonInput {

    @Field(() => [pokemon_formsCreateWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsCreateWithoutPokemonInput)
    create?: Array<pokemon_formsCreateWithoutPokemonInput>;

    @Field(() => [pokemon_formsCreateOrConnectWithoutPokemonInput], {nullable:true})
    @Type(() => pokemon_formsCreateOrConnectWithoutPokemonInput)
    connectOrCreate?: Array<pokemon_formsCreateOrConnectWithoutPokemonInput>;

    @Field(() => [pokemon_formsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_formsWhereUniqueInput)
    connect?: Array<pokemon_formsWhereUniqueInput>;
}
