import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutEvolution_triggersInput } from './pokemon-evolution-create-without-evolution-triggers.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput } from './pokemon-evolution-create-or-connect-without-evolution-triggers.input';
import { pokemon_evolutionUpsertWithWhereUniqueWithoutEvolution_triggersInput } from './pokemon-evolution-upsert-with-where-unique-without-evolution-triggers.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { pokemon_evolutionUpdateWithWhereUniqueWithoutEvolution_triggersInput } from './pokemon-evolution-update-with-where-unique-without-evolution-triggers.input';
import { pokemon_evolutionUpdateManyWithWhereWithoutEvolution_triggersInput } from './pokemon-evolution-update-many-with-where-without-evolution-triggers.input';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class pokemon_evolutionUncheckedUpdateManyWithoutEvolution_triggersNestedInput {

    @Field(() => [pokemon_evolutionCreateWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutEvolution_triggersInput)
    create?: Array<pokemon_evolutionCreateWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionUpsertWithWhereUniqueWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionUpsertWithWhereUniqueWithoutEvolution_triggersInput)
    upsert?: Array<pokemon_evolutionUpsertWithWhereUniqueWithoutEvolution_triggersInput>;

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

    @Field(() => [pokemon_evolutionUpdateWithWhereUniqueWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateWithWhereUniqueWithoutEvolution_triggersInput)
    update?: Array<pokemon_evolutionUpdateWithWhereUniqueWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionUpdateManyWithWhereWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateManyWithWhereWithoutEvolution_triggersInput)
    updateMany?: Array<pokemon_evolutionUpdateManyWithWhereWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    @Type(() => pokemon_evolutionScalarWhereInput)
    deleteMany?: Array<pokemon_evolutionScalarWhereInput>;
}
