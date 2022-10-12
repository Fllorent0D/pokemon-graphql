import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesCreateWithoutItemsInput } from './machines-create-without-items.input';
import { Type } from 'class-transformer';
import { machinesCreateOrConnectWithoutItemsInput } from './machines-create-or-connect-without-items.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class machinesCreateNestedManyWithoutItemsInput {

    @Field(() => [machinesCreateWithoutItemsInput], {nullable:true})
    @Type(() => machinesCreateWithoutItemsInput)
    create?: Array<machinesCreateWithoutItemsInput>;

    @Field(() => [machinesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => machinesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<machinesCreateOrConnectWithoutItemsInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    connect?: Array<machinesWhereUniqueInput>;
}
