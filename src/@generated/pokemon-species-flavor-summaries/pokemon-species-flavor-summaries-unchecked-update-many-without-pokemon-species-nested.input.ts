import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-create-or-connect-without-pokemon-species.input';
import { pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_species_flavor_summariesWhereUniqueInput } from './pokemon-species-flavor-summaries-where-unique.input';
import { pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-update-with-where-unique-without-pokemon-species.input';
import { pokemon_species_flavor_summariesUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-species-flavor-summaries-update-many-with-where-without-pokemon-species.input';
import { pokemon_species_flavor_summariesScalarWhereInput } from './pokemon-species-flavor-summaries-scalar-where.input';

@InputType()
export class pokemon_species_flavor_summariesUncheckedUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_flavor_summariesCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_flavor_summariesCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_species_flavor_summariesUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    set?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    disconnect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    delete?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesWhereUniqueInput)
    connect?: Array<pokemon_species_flavor_summariesWhereUniqueInput>;

    @Field(() => [pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_species_flavor_summariesUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_species_flavor_summariesUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_flavor_summariesScalarWhereInput)
    deleteMany?: Array<pokemon_species_flavor_summariesScalarWhereInput>;
}
