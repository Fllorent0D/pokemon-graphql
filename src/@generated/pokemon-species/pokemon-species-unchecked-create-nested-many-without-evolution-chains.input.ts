import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutEvolution_chainsInput } from './pokemon-species-create-without-evolution-chains.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput } from './pokemon-species-create-or-connect-without-evolution-chains.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesUncheckedCreateNestedManyWithoutEvolution_chainsInput {

    @Field(() => [pokemon_speciesCreateWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutEvolution_chainsInput)
    create?: Array<pokemon_speciesCreateWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutEvolution_chainsInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
