import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereUniqueInput } from '../move-meta-ailments/move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateInput } from '../move-meta-ailments/move-meta-ailments-create.input';
import { move_meta_ailmentsUpdateInput } from '../move-meta-ailments/move-meta-ailments-update.input';

@ArgsType()
export class UpsertOnemoveMetaAilmentsArgs {

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    where!: move_meta_ailmentsWhereUniqueInput;

    @Field(() => move_meta_ailmentsCreateInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateInput)
    create!: move_meta_ailmentsCreateInput;

    @Field(() => move_meta_ailmentsUpdateInput, {nullable:false})
    @Type(() => move_meta_ailmentsUpdateInput)
    update!: move_meta_ailmentsUpdateInput;
}
