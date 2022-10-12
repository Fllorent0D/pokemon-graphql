import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { movesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { movesUpdateWithoutMove_changelogInput } from './moves-update-without-move-changelog.input';

@InputType()
export class movesUpdateOneRequiredWithoutMove_changelogNestedInput {

    @Field(() => movesWhereUniqueInput, {nullable:true})
    @Type(() => movesWhereUniqueInput)
    connect?: movesWhereUniqueInput;

    @Field(() => movesUpdateWithoutMove_changelogInput, {nullable:true})
    @Type(() => movesUpdateWithoutMove_changelogInput)
    update?: movesUpdateWithoutMove_changelogInput;
}
