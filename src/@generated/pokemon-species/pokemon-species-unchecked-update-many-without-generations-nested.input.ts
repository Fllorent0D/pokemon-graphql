import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutGenerationsInput } from './pokemon-species-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutGenerationsInput } from './pokemon-species-create-or-connect-without-generations.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutGenerationsInput } from './pokemon-species-upsert-with-where-unique-without-generations.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutGenerationsInput } from './pokemon-species-update-with-where-unique-without-generations.input';
import { pokemon_speciesUpdateManyWithWhereWithoutGenerationsInput } from './pokemon-species-update-many-with-where-without-generations.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUncheckedUpdateManyWithoutGenerationsNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutGenerationsInput)
    create?: Array<pokemon_speciesCreateWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutGenerationsInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutGenerationsInput>;

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

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
