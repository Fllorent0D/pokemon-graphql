import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berriesCreateWithoutItemsInput } from './berries-create-without-items.input';
import { Type } from 'class-transformer';
import { berriesCreateOrConnectWithoutItemsInput } from './berries-create-or-connect-without-items.input';
import { berriesWhereUniqueInput } from './berries-where-unique.input';

@InputType()
export class berriesUncheckedCreateNestedManyWithoutItemsInput {

    @Field(() => [berriesCreateWithoutItemsInput], {nullable:true})
    @Type(() => berriesCreateWithoutItemsInput)
    create?: Array<berriesCreateWithoutItemsInput>;

    @Field(() => [berriesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => berriesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<berriesCreateOrConnectWithoutItemsInput>;

    @Field(() => [berriesWhereUniqueInput], {nullable:true})
    @Type(() => berriesWhereUniqueInput)
    connect?: Array<berriesWhereUniqueInput>;
}
