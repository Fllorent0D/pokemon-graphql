import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesCreateWithoutTypesInput } from './pokemon-types-create-without-types.input';
import { Type } from 'class-transformer';
import { pokemon_typesCreateOrConnectWithoutTypesInput } from './pokemon-types-create-or-connect-without-types.input';
import { pokemon_typesWhereUniqueInput } from './pokemon-types-where-unique.input';

@InputType()
export class pokemon_typesUncheckedCreateNestedManyWithoutTypesInput {

    @Field(() => [pokemon_typesCreateWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesCreateWithoutTypesInput)
    create?: Array<pokemon_typesCreateWithoutTypesInput>;

    @Field(() => [pokemon_typesCreateOrConnectWithoutTypesInput], {nullable:true})
    @Type(() => pokemon_typesCreateOrConnectWithoutTypesInput)
    connectOrCreate?: Array<pokemon_typesCreateOrConnectWithoutTypesInput>;

    @Field(() => [pokemon_typesWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_typesWhereUniqueInput)
    connect?: Array<pokemon_typesWhereUniqueInput>;
}
