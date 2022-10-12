import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_meta_stat_changesInput } from './moves-update-without-move-meta-stat-changes.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_meta_stat_changesNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_meta_stat_changesInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_meta_stat_changesInput)
    update?: movesUpdateWithoutMove_meta_stat_changesInput;
}
