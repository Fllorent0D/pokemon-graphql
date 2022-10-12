import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_flavor_summariesInput } from './moves-update-without-move-flavor-summaries.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_flavor_summariesNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_flavor_summariesInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_flavor_summariesInput)
    update?: movesUpdateWithoutMove_flavor_summariesInput;
}
