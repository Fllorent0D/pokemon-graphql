import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsCreateWithoutPokemon_speciesInput } from './evolution-chains-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateOrConnectWithoutPokemon_speciesInput } from './evolution-chains-create-or-connect-without-pokemon-species.input';
import { evolution_chainsUpsertWithoutPokemon_speciesInput } from './evolution-chains-upsert-without-pokemon-species.input';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { evolution_chainsUpdateWithoutPokemon_speciesInput } from './evolution-chains-update-without-pokemon-species.input';

@InputType()
export class evolution_chainsUpdateOneWithoutPokemon_speciesNestedInput {

    @Field(() => evolution_chainsCreateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsCreateWithoutPokemon_speciesInput)
    create?: evolution_chainsCreateWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsCreateOrConnectWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: evolution_chainsCreateOrConnectWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsUpsertWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsUpsertWithoutPokemon_speciesInput)
    upsert?: evolution_chainsUpsertWithoutPokemon_speciesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => evolution_chainsWhereUniqueInput, {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    connect?: evolution_chainsWhereUniqueInput;

    @Field(() => evolution_chainsUpdateWithoutPokemon_speciesInput, {nullable:true})
    @Type(() => evolution_chainsUpdateWithoutPokemon_speciesInput)
    update?: evolution_chainsUpdateWithoutPokemon_speciesInput;
}
