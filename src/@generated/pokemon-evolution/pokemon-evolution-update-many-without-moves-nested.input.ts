import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutMovesInput } from './pokemon-evolution-create-without-moves.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutMovesInput } from './pokemon-evolution-create-or-connect-without-moves.input';
import { pokemon_evolutionUpsertWithWhereUniqueWithoutMovesInput } from './pokemon-evolution-upsert-with-where-unique-without-moves.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { pokemon_evolutionUpdateWithWhereUniqueWithoutMovesInput } from './pokemon-evolution-update-with-where-unique-without-moves.input';
import { pokemon_evolutionUpdateManyWithWhereWithoutMovesInput } from './pokemon-evolution-update-many-with-where-without-moves.input';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class pokemon_evolutionUpdateManyWithoutMovesNestedInput {

    @Field(() => [pokemon_evolutionCreateWithoutMovesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutMovesInput)
    create?: Array<pokemon_evolutionCreateWithoutMovesInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutMovesInput>;

    @Field(() => [pokemon_evolutionUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<pokemon_evolutionUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    set?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    disconnect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    delete?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;

    @Field(() => [pokemon_evolutionUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<pokemon_evolutionUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [pokemon_evolutionUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<pokemon_evolutionUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    @Type(() => pokemon_evolutionScalarWhereInput)
    deleteMany?: Array<pokemon_evolutionScalarWhereInput>;
}
