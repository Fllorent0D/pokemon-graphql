import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesCreateWithoutMovesInput } from './machines-create-without-moves.input';
import { Type } from 'class-transformer';
import { machinesCreateOrConnectWithoutMovesInput } from './machines-create-or-connect-without-moves.input';
import { machinesUpsertWithWhereUniqueWithoutMovesInput } from './machines-upsert-with-where-unique-without-moves.input';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { machinesUpdateWithWhereUniqueWithoutMovesInput } from './machines-update-with-where-unique-without-moves.input';
import { machinesUpdateManyWithWhereWithoutMovesInput } from './machines-update-many-with-where-without-moves.input';
import { machinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class machinesUncheckedUpdateManyWithoutMovesNestedInput {

    @Field(() => [machinesCreateWithoutMovesInput], {nullable:true})
    @Type(() => machinesCreateWithoutMovesInput)
    create?: Array<machinesCreateWithoutMovesInput>;

    @Field(() => [machinesCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => machinesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<machinesCreateOrConnectWithoutMovesInput>;

    @Field(() => [machinesUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => machinesUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<machinesUpsertWithWhereUniqueWithoutMovesInput>;

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

    @Field(() => [machinesUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => machinesUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<machinesUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [machinesUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => machinesUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<machinesUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [machinesScalarWhereInput], {nullable:true})
    @Type(() => machinesScalarWhereInput)
    deleteMany?: Array<machinesScalarWhereInput>;
}
