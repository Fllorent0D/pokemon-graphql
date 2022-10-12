import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateOrConnectWithoutShapeInput } from './pokemon-species-create-or-connect-without-shape.input';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput {

    @Field(() => [pokemon_speciesCreateWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesCreateWithoutShapeInput)
    create?: Array<pokemon_speciesCreateWithoutShapeInput>;

    @Field(() => [pokemon_speciesCreateOrConnectWithoutShapeInput], {nullable:true})
    @Type(() => pokemon_speciesCreateOrConnectWithoutShapeInput)
    connectOrCreate?: Array<pokemon_speciesCreateOrConnectWithoutShapeInput>;

    @Field(() => [pokemon_speciesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_speciesWhereUniqueInput)
    connect?: Array<pokemon_speciesWhereUniqueInput>;
}
