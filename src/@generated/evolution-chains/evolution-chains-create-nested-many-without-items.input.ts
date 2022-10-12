import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsCreateWithoutItemsInput } from './evolution-chains-create-without-items.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateOrConnectWithoutItemsInput } from './evolution-chains-create-or-connect-without-items.input';
import { evolution_chainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@InputType()
export class evolution_chainsCreateNestedManyWithoutItemsInput {

    @Field(() => [evolution_chainsCreateWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsCreateWithoutItemsInput)
    create?: Array<evolution_chainsCreateWithoutItemsInput>;

    @Field(() => [evolution_chainsCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => evolution_chainsCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<evolution_chainsCreateOrConnectWithoutItemsInput>;

    @Field(() => [evolution_chainsWhereUniqueInput], {nullable:true})
    @Type(() => evolution_chainsWhereUniqueInput)
    connect?: Array<evolution_chainsWhereUniqueInput>;
}
