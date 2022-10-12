import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutPokemon_speciesInput } from './pokemon-species-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-create-or-connect-without-pokemon-species.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedManyWithoutPokemon_speciesInput {

    @Field(() => [pokemon_speciesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_speciesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
