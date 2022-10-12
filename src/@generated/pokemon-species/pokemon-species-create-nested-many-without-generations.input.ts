import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutGenerationsInput } from './pokemon-species-create-without-generations.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutGenerationsInput } from './pokemon-species-create-or-connect-without-generations.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesCreateNestedManyWithoutGenerationsInput {

    @Field(() => [pokemon_speciesCreateWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutGenerationsInput)
    create?: Array<pokemon_speciesCreateWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutGenerationsInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutGenerationsInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutGenerationsInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
