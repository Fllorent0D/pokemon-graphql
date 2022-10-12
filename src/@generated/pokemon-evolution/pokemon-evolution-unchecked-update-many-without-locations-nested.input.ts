import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutLocationsInput } from './pokemon-evolution-create-without-locations.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutLocationsInput } from './pokemon-evolution-create-or-connect-without-locations.input';
import { pokemon_evolutionUpsertWithWhereUniqueWithoutLocationsInput } from './pokemon-evolution-upsert-with-where-unique-without-locations.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { pokemon_evolutionUpdateWithWhereUniqueWithoutLocationsInput } from './pokemon-evolution-update-with-where-unique-without-locations.input';
import { pokemon_evolutionUpdateManyWithWhereWithoutLocationsInput } from './pokemon-evolution-update-many-with-where-without-locations.input';
import { pokemon_evolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';

@InputType()
export class pokemon_evolutionUncheckedUpdateManyWithoutLocationsNestedInput {

    @Field(() => [pokemon_evolutionCreateWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutLocationsInput)
    create?: Array<pokemon_evolutionCreateWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutLocationsInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionUpsertWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionUpsertWithWhereUniqueWithoutLocationsInput)
    upsert?: Array<pokemon_evolutionUpsertWithWhereUniqueWithoutLocationsInput>;

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

    @Field(() => [pokemon_evolutionUpdateWithWhereUniqueWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateWithWhereUniqueWithoutLocationsInput)
    update?: Array<pokemon_evolutionUpdateWithWhereUniqueWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionUpdateManyWithWhereWithoutLocationsInput], {nullable:true})
    @Type(() => pokemon_evolutionUpdateManyWithWhereWithoutLocationsInput)
    updateMany?: Array<pokemon_evolutionUpdateManyWithWhereWithoutLocationsInput>;

    @Field(() => [pokemon_evolutionScalarWhereInput], {nullable:true})
    @Type(() => pokemon_evolutionScalarWhereInput)
    deleteMany?: Array<pokemon_evolutionScalarWhereInput>;
}
