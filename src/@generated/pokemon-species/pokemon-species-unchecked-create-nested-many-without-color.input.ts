import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutColorInput } from './pokemon-species-create-without-color.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutColorInput } from './pokemon-species-create-or-connect-without-color.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesUncheckedCreateNestedManyWithoutColorInput {

    @Field(() => [pokemon_speciesCreateWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutColorInput)
    create?: Array<pokemon_speciesCreateWithoutColorInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutColorInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutColorInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutColorInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
