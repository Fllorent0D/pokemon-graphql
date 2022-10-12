import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutGrowth_ratesInput } from './pokemon-species-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput } from './pokemon-species-create-or-connect-without-growth-rates.input';
import { pokemon_speciesUpsertWithWhereUniqueWithoutGrowth_ratesInput } from './pokemon-species-upsert-with-where-unique-without-growth-rates.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { pokemon_speciesUpdateWithWhereUniqueWithoutGrowth_ratesInput } from './pokemon-species-update-with-where-unique-without-growth-rates.input';
import { pokemon_speciesUpdateManyWithWhereWithoutGrowth_ratesInput } from './pokemon-species-update-many-with-where-without-growth-rates.input';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';

@InputType()
export class pokemon_speciesUpdateManyWithoutGrowth_ratesNestedInput {

    @Field(() => [pokemon_speciesCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutGrowth_ratesInput)
    create?: Array<pokemon_speciesCreateWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesUpsertWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesUpsertWithWhereUniqueWithoutGrowth_ratesInput)
    upsert?: Array<pokemon_speciesUpsertWithWhereUniqueWithoutGrowth_ratesInput>;

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

    @Field(() => [pokemon_speciesUpdateWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateWithWhereUniqueWithoutGrowth_ratesInput)
    update?: Array<pokemon_speciesUpdateWithWhereUniqueWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesUpdateManyWithWhereWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesUpdateManyWithWhereWithoutGrowth_ratesInput)
    updateMany?: Array<pokemon_speciesUpdateManyWithWhereWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    @Type(() => pokemon_speciesScalarWhereInput)
    deleteMany?: Array<pokemon_speciesScalarWhereInput>;
}
