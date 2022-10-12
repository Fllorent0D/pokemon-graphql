import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_evolutionCreateWithoutEvolution_triggersInput } from './pokemon-evolution-create-without-evolution-triggers.input';
import { Type } from 'class-transformer';
import { pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput } from './pokemon-evolution-create-or-connect-without-evolution-triggers.input';
import { pokemon_evolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@InputType()
export class pokemon_evolutionCreateNestedManyWithoutEvolution_triggersInput {

    @Field(() => [pokemon_evolutionCreateWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateWithoutEvolution_triggersInput)
    create?: Array<pokemon_evolutionCreateWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput], {nullable:true})
    @Type(() => pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput)
    connectOrCreate?: Array<pokemon_evolutionCreateOrConnectWithoutEvolution_triggersInput>;

    @Field(() => [pokemon_evolutionWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_evolutionWhereUniqueInput)
    connect?: Array<pokemon_evolutionWhereUniqueInput>;
}
