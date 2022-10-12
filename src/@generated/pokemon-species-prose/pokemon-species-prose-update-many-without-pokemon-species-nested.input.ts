import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_proseCreateWithoutPokemon_speciesInput } from './pokemon-species-prose-create-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput } from './pokemon-species-prose-create-or-connect-without-pokemon-species.input';
import { pokemon_species_proseUpsertWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-prose-upsert-with-where-unique-without-pokemon-species.input';
import { pokemon_species_proseWhereUniqueInput } from './pokemon-species-prose-where-unique.input';
import { pokemon_species_proseUpdateWithWhereUniqueWithoutPokemon_speciesInput } from './pokemon-species-prose-update-with-where-unique-without-pokemon-species.input';
import { pokemon_species_proseUpdateManyWithWhereWithoutPokemon_speciesInput } from './pokemon-species-prose-update-many-with-where-without-pokemon-species.input';
import { pokemon_species_proseScalarWhereInput } from './pokemon-species-prose-scalar-where.input';

@InputType()
export class pokemon_species_proseUpdateManyWithoutPokemon_speciesNestedInput {

    @Field(() => [pokemon_species_proseCreateWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateWithoutPokemon_speciesInput)
    create?: Array<pokemon_species_proseCreateWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput)
    connectOrCreate?: Array<pokemon_species_proseCreateOrConnectWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseUpsertWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpsertWithWhereUniqueWithoutPokemon_speciesInput)
    upsert?: Array<pokemon_species_proseUpsertWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    set?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    disconnect?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    delete?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_species_proseWhereUniqueInput)
    connect?: Array<pokemon_species_proseWhereUniqueInput>;

    @Field(() => [pokemon_species_proseUpdateWithWhereUniqueWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpdateWithWhereUniqueWithoutPokemon_speciesInput)
    update?: Array<pokemon_species_proseUpdateWithWhereUniqueWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseUpdateManyWithWhereWithoutPokemon_speciesInput], {nullable:true})
    @Type(() => pokemon_species_proseUpdateManyWithWhereWithoutPokemon_speciesInput)
    updateMany?: Array<pokemon_species_proseUpdateManyWithWhereWithoutPokemon_speciesInput>;

    @Field(() => [pokemon_species_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_species_proseScalarWhereInput)
    deleteMany?: Array<pokemon_species_proseScalarWhereInput>;
}
