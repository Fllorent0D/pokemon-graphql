import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutEvolution_chainsInput } from './pokemon-species-create-without-evolution-chains.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput } from './pokemon-species-create-or-connect-without-evolution-chains.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutEvolution_chainsInput } from './pokemon-species-upsert-with-where-unique-without-evolution-chains.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutEvolution_chainsInput } from './pokemon-species-update-with-where-unique-without-evolution-chains.input';
import { pokemon_speciesUpdateManyWithWhereWithoutEvolution_chainsInput } from './pokemon-species-update-many-with-where-without-evolution-chains.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutEvolution_chainsInput)
    create?: Array<pokemon_speciesCreateWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutEvolution_chainsInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    set?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    disconnect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    delete?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutEvolution_chainsInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutEvolution_chainsInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
