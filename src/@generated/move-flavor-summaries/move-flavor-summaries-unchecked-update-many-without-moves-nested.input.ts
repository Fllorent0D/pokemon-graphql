import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesCreateWithoutMovesInput } from './move-flavor-summaries-create-without-moves.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesCreateOrConnectWithoutMovesInput } from './move-flavor-summaries-create-or-connect-without-moves.input';
import { move_flavor_summariesUpsertWithWhereUniqueWithoutMovesInput } from './move-flavor-summaries-upsert-with-where-unique-without-moves.input';
import { move_flavor_summariesWhereUniqueInput } from './move-flavor-summaries-where-unique.input';
import { move_flavor_summariesUpdateWithWhereUniqueWithoutMovesInput } from './move-flavor-summaries-update-with-where-unique-without-moves.input';
import { move_flavor_summariesUpdateManyWithWhereWithoutMovesInput } from './move-flavor-summaries-update-many-with-where-without-moves.input';
import { move_flavor_summariesScalarWhereInput } from './move-flavor-summaries-scalar-where.input';

@InputType()
export class move_flavor_summariesUncheckedUpdateManyWithoutMovesNestedInput {

    @Field(() => [move_flavor_summariesCreateWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateWithoutMovesInput)
    create?: Array<move_flavor_summariesCreateWithoutMovesInput>;

    @Field(() => [move_flavor_summariesCreateOrConnectWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Array<move_flavor_summariesCreateOrConnectWithoutMovesInput>;

    @Field(() => [move_flavor_summariesUpsertWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpsertWithWhereUniqueWithoutMovesInput)
    upsert?: Array<move_flavor_summariesUpsertWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    set?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    disconnect?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    delete?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    connect?: Array<move_flavor_summariesWhereUniqueInput>;

    @Field(() => [move_flavor_summariesUpdateWithWhereUniqueWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpdateWithWhereUniqueWithoutMovesInput)
    update?: Array<move_flavor_summariesUpdateWithWhereUniqueWithoutMovesInput>;

    @Field(() => [move_flavor_summariesUpdateManyWithWhereWithoutMovesInput], {nullable:true})
    @Type(() => move_flavor_summariesUpdateManyWithWhereWithoutMovesInput)
    updateMany?: Array<move_flavor_summariesUpdateManyWithWhereWithoutMovesInput>;

    @Field(() => [move_flavor_summariesScalarWhereInput], {nullable:true})
    @Type(() => move_flavor_summariesScalarWhereInput)
    deleteMany?: Array<move_flavor_summariesScalarWhereInput>;
}
