import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutContest_effectsInput } from './moves-update-with-where-unique-without-contest-effects.input';
import { movesUpdateManyWithWhereWithoutContest_effectsInput } from './moves-update-many-with-where-without-contest-effects.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUpdateManyWithoutContest_effectsNestedInput {

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

    @Field(() => [movesUpdateWithWhereUniqueWithoutContest_effectsInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutContest_effectsInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutContest_effectsInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutContest_effectsInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutContest_effectsInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutContest_effectsInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
