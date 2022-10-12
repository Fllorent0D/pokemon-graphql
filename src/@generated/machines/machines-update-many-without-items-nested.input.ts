import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesCreateWithoutItemsInput } from './machines-create-without-items.input';
import { Type } from 'class-transformer';
import { machinesCreateOrConnectWithoutItemsInput } from './machines-create-or-connect-without-items.input';
import { machinesUpsertWithWhereUniqueWithoutItemsInput } from './machines-upsert-with-where-unique-without-items.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { machinesUpdateWithWhereUniqueWithoutItemsInput } from './machines-update-with-where-unique-without-items.input';
import { machinesUpdateManyWithWhereWithoutItemsInput } from './machines-update-many-with-where-without-items.input';
import { machinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class machinesUpdateManyWithoutItemsNestedInput {

    @Field(() => [machinesCreateWithoutItemsInput], {nullable:true})
    @Type(() => machinesCreateWithoutItemsInput)
    create?: Array<machinesCreateWithoutItemsInput>;

    @Field(() => [machinesCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => machinesCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<machinesCreateOrConnectWithoutItemsInput>;

    @Field(() => [machinesUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => machinesUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<machinesUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    set?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    disconnect?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    delete?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesWhereUniqueInput], {nullable:true})
    @Type(() => machinesWhereUniqueInput)
    connect?: Array<machinesWhereUniqueInput>;

    @Field(() => [machinesUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => machinesUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<machinesUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [machinesUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => machinesUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<machinesUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    @Type(() => machinesScalarWhereInput)
    deleteMany?: Array<machinesScalarWhereInput>;
}
