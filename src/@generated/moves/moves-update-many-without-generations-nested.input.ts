import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithWhereUniqueWithoutGenerationsInput } from './moves-update-with-where-unique-without-generations.input';
import { movesUpdateManyWithWhereWithoutGenerationsInput } from './moves-update-many-with-where-without-generations.input';
import { movesScalarWhereInput } from './moves-scalar-where.input';

@InputType()
export class movesUpdateManyWithoutGenerationsNestedInput {

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

    @Field(() => [movesUpdateWithWhereUniqueWithoutGenerationsInput], {nullable:true})
    @Type(() => movesUpdateWithWhereUniqueWithoutGenerationsInput)
    update?: Array<movesUpdateWithWhereUniqueWithoutGenerationsInput>;

    @Field(() => [movesUpdateManyWithWhereWithoutGenerationsInput], {nullable:true})
    @Type(() => movesUpdateManyWithWhereWithoutGenerationsInput)
    updateMany?: Array<movesUpdateManyWithWhereWithoutGenerationsInput>;

    @Field(() => [movesScalarWhereInput], {nullable:true})
    @Type(() => movesScalarWhereInput)
    deleteMany?: Array<movesScalarWhereInput>;
}
