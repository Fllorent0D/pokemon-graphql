import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsCreateWithoutPokemon_speciesInput } from './evolution-chains-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateOrConnectWithoutPokemon_speciesInput } from './evolution-chains-create-or-connect-without-pokemon-species.input';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@InputType()
export class evolution_chainsCreateNestedOneWithoutPokemon_speciesInput {

    @Field(() => evolution_chainsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsCreateWithoutPokemon_speciesInput)
    create?: evolution_chainsCreateWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: evolution_chainsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    connect?: evolution_chainsWhereUniqueInput;
}
