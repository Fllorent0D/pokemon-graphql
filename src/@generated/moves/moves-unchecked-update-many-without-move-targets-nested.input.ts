import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutMove_targetsInput } from './moves-update-with-where-unique-without-move-targets.input';
import { movesUpdateManyWithWhereWithoutMove_targetsInput } from './moves-update-many-with-where-without-move-targets.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUncheckedUpdateManyWithoutMove_targetsNestedInput {

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

    @Field(() => [movesUpdateWithWhereUniqueWithoutMove_targetsInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutMove_targetsInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutMove_targetsInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutMove_targetsInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutMove_targetsInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutMove_targetsInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
