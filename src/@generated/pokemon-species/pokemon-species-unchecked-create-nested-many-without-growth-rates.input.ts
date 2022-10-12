import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutGrowth_ratesInput } from './pokemon-species-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput } from './pokemon-species-create-or-connect-without-growth-rates.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesUncheckedCreateNestedManyWithoutGrowth_ratesInput {

    @Field(() => [pokemon_speciesCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutGrowth_ratesInput)
    create?: Array<pokemon_speciesCreateWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
