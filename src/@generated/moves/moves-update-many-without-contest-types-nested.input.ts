import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutContest_typesInput } from './moves-update-with-where-unique-without-contest-types.input';
import { movesUpdateManyWithWhereWithoutContest_typesInput } from './moves-update-many-with-where-without-contest-types.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUpdateManyWithoutContest_typesNestedInput {

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    set?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    disconnect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    delete?: Array<movesWhereUniqueInput>;

    @Field(() => [movesWhereUniqueInput], {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: Array<movesWhereUniqueInput>;

    @Field(() => [movesUpdateWithWhereUniqueWithoutContest_typesInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutContest_typesInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutContest_typesInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutContest_typesInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutContest_typesInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutContest_typesInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
