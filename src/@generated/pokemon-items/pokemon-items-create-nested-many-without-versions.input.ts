import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_itemsCreateWithoutVersionsInput } from './pokemon-items-create-without-versions.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateOrConnectWithoutVersionsInput } from './pokemon-items-create-or-connect-without-versions.input';
import { pokemon_itemsWhereUniqueInput } from './pokemon-items-where-unique.input';

@InputType()
export class pokemon_itemsCreateNestedManyWithoutVersionsInput {

    @Field(() => [pokemon_itemsCreateWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateWithoutVersionsInput)
    create?: Array<pokemon_itemsCreateWithoutVersionsInput>;

    @Field(() => [pokemon_itemsCreateOrConnectWithoutVersionsInput], {nullable:true})
    @Type(() => pokemon_itemsCreateOrConnectWithoutVersionsInput)
    connectOrCreate?: Array<pokemon_itemsCreateOrConnectWithoutVersionsInput>;

    @Field(() => [pokemon_itemsWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_itemsWhereUniqueInput)
    connect?: Array<pokemon_itemsWhereUniqueInput>;
}
